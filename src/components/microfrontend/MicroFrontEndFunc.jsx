import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';


function MicroFrontend ({
  id,
  microId,
  name,
  host,
  loadType,
  buildMode,
  basePath,
  history,
}) {
  console.log('MicroFrontend rendering...');
  document.title = 'Main SPA | ' + name;
  const [status, setStatus] = useState('loading');

  const renderMicroFrontend = useCallback(() => {
    const baseHost = parseHost(host);
    console.log(`Host is ${baseHost}`);

    if (buildMode === 'regular') {
      window[`render${microId}`](`${microId}-container`, {
        basePath: basePath,
        host: baseHost,
        history: history,
      });
    } else {
      // library mode
      window[microId].render(`${microId}-container`, {
        basePath: basePath,
        host: baseHost,
        history: history,
      });
    }
  }, [ basePath, buildMode, history, host, microId]);

  const parseHost = (host) => {
    let url = new URL(host);
    let port = url.port !== '' ? ':' + url.port : '';
    return `${url.protocol}//${url.hostname}${port}`;
  };

  useEffect(() => {
    if (status === 'done') {
      renderMicroFrontend();
    }
  }, [status, renderMicroFrontend]);

  useEffect(() => {
    let baseHost = parseHost(host);
    console.log(`Host is ${baseHost}`);

    const scriptId = `micro-frontend-script-${id}`;

    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      setStatus('done');
      return;
    }

    if (loadType === 'not-optimized') {
      // This is a regular React build but in one file (without code splitting)
      fetch(`${host}/asset-manifest.json`)
        .then((res) => res.json())
        .then((manifest) => {
          const script = document.createElement('script');
          script.id = scriptId;
          script.crossOrigin = '';
          script.src = `${baseHost}${manifest.files['main.js']}`;
          script.onload = () => {
            setStatus('done');
          };
          document.head.appendChild(script);
          const css = manifest.files['main.css'];
          if (css !== undefined) {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = `${baseHost}${manifest.files['main.css']}`;
            document.head.appendChild(style);
          }
        })
        .catch((error) => {
          console.error(`Error loading micro-frontend ${id} - ${error.message}`);
          setStatus('error');
        });
    } else if (loadType === 'optimized') {
      // This is a regular React build using code splitting
      fetch(`${host}/asset-manifest.json`)
        .then((res) => res.json())
        .then((manifest) => {
          let chunkCount = -1;
          Object.keys(manifest['files'])
            .filter((key) => key.endsWith('.js'))
            .forEach((key, _, arr) => {
              if (chunkCount < 0) {
                chunkCount = arr.length;
              }
              const path = `${baseHost}${manifest['files'][key]}`;
              const script = document.createElement('script');
              if (key === 'main.js') {
                script.id = scriptId;
              }
              script.onload = () => {
                chunkCount--;
                if (chunkCount === 0) {
                  setStatus('done');
                }
              };
              script.src = path;
              document.head.appendChild(script);
            });
        })
        .catch((error) => {
          console.error(`Error loading micro-frontend ${id} - ${error.message}`);
          setStatus('error');
        });
    } else if (loadType === 'bundle') {
      // This is just a bundle file (no manifest)
      const script = document.createElement('script');

      script.id = scriptId;
      script.src = host;

      document.body.appendChild(script);
      script.onload = () => {
        setStatus('done');
      };
    } else {
      throw new Error('You must define a loadType.');
    }

    return function cleanup() {
      const scriptId = `micro-frontend-script-${microId}`;
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.removeEventListener('load');
      }

      if (buildMode === 'regular') {
        if (window[`unmount${microId}`]) {
          window[`unmount${microId}`](`${microId}-container`);
        }
      } else {
        if (window[microId]) {
          window[microId].unMount(`${microId}-container`);
        }
      }
    };
  }, [host, id, loadType, microId, buildMode]);

  let microModule;
  if (status === 'loading') {
    console.info('loading...')
  } else if (status === 'done') {
    microModule = <div id={`${microId}-container`}></div>;
  } else if (status === 'error') {
    microModule = (
      <div>
        <p>
          Oops! An error occurred loading the micro-app, please refresh the page.
        </p>
      </div>
    );
  } else {
    microModule = (
      <div>
        <p>
          Oops!An unexpected error occurred, please try refreshing the page.
        </p>
      </div>
    );
  }

  return <>{microModule}</>;
};

MicroFrontend.defaultProps = {
  document,
  window,
  loadType: 'not-optimized',
  buildMode: 'library',
};

MicroFrontend.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired,
  microId: PropTypes.string.isRequired,
  document: PropTypes.object,
  loadType: PropTypes.oneOf(['optimized', 'not-optimized', 'bundle']).isRequired,
  buildMode: PropTypes.oneOf(['library', 'regular']),
  window: PropTypes.object,
  history: PropTypes.object,
  classes: PropTypes.any,
};

export default MicroFrontend;
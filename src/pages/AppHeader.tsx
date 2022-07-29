
import React from 'react';
import Header from '../components/blocks/Header';
import Button from '../components/elements/Button';
import i18n from '../config/i18n';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/' ? true : false;
  const { t } = useTranslation()
  const LANGUAGES = [
    {
      label: 'ES',
      value: 'es'
    },
    {
      label: 'EN',
      value: 'en'
    }
  ]

  const changeLanguage = ((language: string) => {
    localStorage.setItem('lang', language)
    window.dispatchEvent(new Event('storage'))
    i18n.changeLanguage(language)
  })

  return (
    <Header justifyItems={isHome ? 'flex-end' : 'space-between'}>
      <React.Fragment>
        {!isHome && <div>
          <Button onClick={() => navigate('/')}>{t('goBack')}</Button>
        </div>}
      </React.Fragment>
      <div>
        {LANGUAGES.map((item) => {
          return <Button key={item.label} onClick={() => changeLanguage(item.value)}>{item.label}</Button>
        })}
      </div>
    </Header>
  );
};

export default AppHeader;

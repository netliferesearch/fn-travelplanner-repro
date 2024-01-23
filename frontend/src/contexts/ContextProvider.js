import { UserProvider } from '@auth0/nextjs-auth0';
import React from 'react';
import { MapProvider } from 'react-map-gl';
import { ErrorProvider } from './ErrorProvider';
import { HistoryProvider } from './HistoryProvider';
import { ImageGalleryProvider } from './ImageGalleryProvider';
import { LanguageProvider } from './LanguageProvider';
import { MenuProvider } from './MenuProvider';
import { PlannerProvider } from './PlannerProvider';
import { RegionsMapProvider } from './RegionsMapProvider';
import { SearchProvider } from './SearchProvider';
import { ToastProvider } from './ToastProvider';
import { TravellerProvider } from './TravellerProvider';
import { TravelPlannerProvider } from './TravelPlannerProvider';
import { UiProvider } from './UiProvider';

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight((kids, parent) => React.cloneElement(parent, { children: kids }), children);

export const ContextProvider = ({ children }) => (
  <ProviderComposer
    contexts={[
      <ErrorProvider />,
      <HistoryProvider />,
      <ImageGalleryProvider />,
      <LanguageProvider />,
      <MapProvider />,
      <MenuProvider />,
      <PlannerProvider />,
      <RegionsMapProvider />,
      <SearchProvider />,
      <ToastProvider />,
      <TravellerProvider />,
      <TravelPlannerProvider />,
      <UiProvider />,
      <UserProvider />,
    ]}
  >
    {children}
  </ProviderComposer>
);

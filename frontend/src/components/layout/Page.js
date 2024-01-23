/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * ! Wrap the layout around all pages
 * Site header, main content and Site footer
 *
 * Title for the <Head> is passed in here too
 * TODO: Pass in more metadata for the <head> like description etc?
 *
 */

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ErrorContext, UiContext } from '../../contexts';
import { config } from './../../../config';

const { pageTypes } = config;

const Page = ({
  children,
  className,
  title,
  // Objects passed to the different page templates, usually referred to as 'item'
}) => {
  const { errors } = useContext(ErrorContext);
  const { uiDarkMode } = useContext(UiContext);
  /* flood warning modal
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => {
   setIsModalOpen(false);
  }; */

  const router = useRouter();
  let canonical = '';
  canonical = `https://www.somewhere.com${router.asPath}`;

  const renderPage = () => (
    <>
      {/* TODO: use pageType for something else (fullscreen from NBIM) */}

      <>
        <Head>
          {/* 'title' is usually passed already translated at the template level, so we accept it here in case we forget to set it there */}
          {title && <title>{title}</title>}
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={canonical} />
          {/* {renderHrefLangTags(renderHrefLangTagsArguments)} */}
        </Head>

        {/* flood warning modal {isModalOpen && <ModalInfo onClose={closeModal} />} */}
        {children}
      </>
    </>
  );

  return (
    <div
      id="page"
      className={classNames(
        'min-h-screen',
        'flex flex-col',
        'overflow-hidden',
        uiDarkMode ? 'dark' : '',
        className,
      )}
    >
      {errors ? <></> : children ? <>{renderPage()}</> : null}
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.ss.oneOf(pageTypes),
};

export default Page;

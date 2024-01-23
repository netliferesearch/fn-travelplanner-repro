import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef } from 'react';
import { SearchContext } from '../../../contexts';
import useLanguage from '../../../hooks/useLanguage';
import { lang } from '../../../utils/langUtil';

const SearchInput = ({
  className = '', // accepts CSS classNames as string
  focus = false,
  hiddenLabel = false,
  label = '',
  onChangeHandler,
  onInputKeyboardEventHandler = () => {},
  placeholder = 'Søk',
  title = '',
  type = 'text',
  value = '',
}) => {
  const { setSearchValueGlobal } = useContext(SearchContext);
  const language = useLanguage();

  const searchInputRef = useRef();

  const handleChange = event => {
    if (onChangeHandler) {
      onChangeHandler(event.target.value);
    }
  };

  const handleReset = () => {
    setSearchValueGlobal('');
    if (onChangeHandler) {
      onChangeHandler('');
    }
    searchInputRef.current.focus();
  };

  useEffect(() => {
    if (focus) {
      searchInputRef.current.focus();
    }
  }, [focus]);

  return (
    <label
      className={classnames('relative', 'block', 'w-full', 'stroke-black', className)}
      htmlFor="search"
    >
      {label && <span className={classnames('text-black', { hidden: hiddenLabel })}>{label}</span>}
      <input
        ref={searchInputRef}
        aria-label={title || lang('Search field', language)}
        className={classnames(
          'form-input',
          'block',
          'w-full py-3',
          'r-border focus:border-blue-dark border-black focus:shadow-none focus:outline-none',
          'placeholder-grey-aa',
          'r-text-sm',
          'pr-10 md:pr-12',
        )}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onInputKeyboardEventHandler}
      />

      {/* Reset search X button */}
      {value ? (
        <button
          className="
            group
            absolute
            top-1/2 right-1
            -translate-y-1/2
            p-2
            leading-none
            transition-transform duration-100 ease-out
            hover:scale-[1.2]
          "
          aria-label={lang('Reset search', language)}
          onClick={handleReset}
          type="button"
        >
          Icon
        </button>
      ) : (
        'Icon'
      )}
    </label>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  focus: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChangeHandler: PropTypes.func,
  onInputKeyboardEventHandler: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default SearchInput;

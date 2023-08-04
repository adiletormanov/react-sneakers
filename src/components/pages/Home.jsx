import React from 'react';

import Card from '.././sneakers/Card';
import Skeleton from '../sneakers/Skeleton';

function Home({ sneakers, isLoading }) {
  const [searchValue, setSearchValue] = React.useState('');


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div>
      <div className="content">
        <div className="content__search">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue} " `
              : 'Все кроссовки'}
          </h1>
          <div className="search__block">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                className="search__block-clear"
                onClick={onClickClear}
                src="/img/btn-remove.svg"
                alt="remove"
              />
            )}
            <input
              ref={inputRef}
              value={searchValue}
              onChange={onChangeSearchInput}
              placeholder="Поиск..."
            />
          </div>
        </div>
      </div>
      <div className="sneakers">
        {isLoading
          ? [...new Array(12)].map((_, id) => <Skeleton key={id} />)
          : sneakers
              .filter((obj) => {
                if (
                  obj.title.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;

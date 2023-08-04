import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteEmpty from '../FavoriteEmpty';
import FavoritesItems from '../FavoritesItems';

function Favorites() {
  const items = useSelector((state) => state.favoriteSlice.items);

  return (
    <div>
      {items.length > 0 ? (
        <div>
          <div className="content">
            <h1>Мои закладки</h1>
          </div>

          <div className="sneakers">
            {items.map((obj) => (
              <FavoritesItems key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      ) : (
        <FavoriteEmpty />
      )}
    </div>
  );
}

export default Favorites;

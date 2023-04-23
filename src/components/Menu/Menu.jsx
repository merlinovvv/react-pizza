import React, { useState } from 'react';
import style from './style.module.css';
import Sort from '../Sort/Sort';

// class Menu extends React.Component {

//   state ={
//     activeItem: null,
//   };

//   onSelectItem = index =>{
//     this.setState({
//       activeItem: index
//     })
//   }

//   render() {

//     const options = [
//       { value: 'popularity', label: 'популярністю' },
//       { value: 'price', label: 'ціною' },
//       { value: 'alphabetical', label: 'алфавітом' },
//     ];

//     const customStyles = {
//       control: (provided, state) => ({
//         ...provided,
//         width: '132px',
//         backgroundColor: 'transparent',
//         borderColor: state.isFocused ? 'transparent' : 'transparent',
//         '&:hover': {
//           borderColor: state.isFocused ? 'transparent' : 'transparent',
//         },
//         boxShadow: '0 0 0 0',
//         cursor: 'pointer',
//       }),
//       option: (provided, state) => ({
//         ...provided,
//         backgroundColor: state.isSelected ? 'rgba(254, 95, 30, 0.05)' : '#fff',
//         color: state.isSelected ? '#FE5F1E' : '#333',
//         '&:hover': {
//           backgroundColor: state.isSelected
//             ? 'rgba(254, 95, 30, 0.08)'
//             : 'rgba(254, 95, 30, 0.05)',
//           color: state.isSelected ? '#FE5F1E' : '#333',
//         },
//       }),
//       indicatorsContainer: (provided, state) => ({
//         ...provided,
//         display: 'none',
//       }),
//       // valueContainer: (provided, state) => ({
//       //   ...provided,
//       //   maxWidth: '132px',
//       //   width: '100%',
//       // }),
//       singleValue: (provided) => ({
//         ...provided,
//         color: '#FE5F1E',
//         '&:hover': {
//           color: '#ff4a00',
//         },
//         textDecoration: 'underline',
//         textDecorationStyle: 'dotted',
//         //   maxWidth: '132px',
//         //   width: '100%',
//       }),
//     };

//     const { items, onClickItem } = this.props;

//     return (
//       <nav className={style.features}>
//         <ul className={style.menu_list}>
//           <li className={style.menu_link}>
//             <button >Всі</button>
//           </li>
//           {items.map((item, index) => (
//             <li key={`${item}_${index}`} className={style.menu_link}>
//               <button
//                 className={this.state.activeItem === index ? style._active : ''}
//                 onClick={() => this.onSelectItem(index)}
//                 key={`${item}_${index}`}>
//                 {item}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <div className={style.sorting}>
//           <span className={style.arrow}></span>
//           <label htmlFor="sort">Сортування за:</label>
//           <Select
//             id="sort"
//             className={style.sort_menu}
//             options={options}
//             styles={customStyles}
//             defaultValue={options[0]}
//           />
//         </div>
//       </nav>
//     );
//   }
// }

// export default Menu;

function Menu({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <nav className={style.features}>
      <ul className={style.menu_list}>
        <li className={style.menu_link}>
          <button
            className={activeItem === null ? style._active : ''}
            onClick={() => onSelectItem(null)}>
            Всі
          </button>
        </li>
        {items &&
          items.map((item, index) => (
            <li key={`${item}_${index}`} className={style.menu_link}>
              <button
                className={activeItem === index ? style._active : ''}
                onClick={() => onSelectItem(index)}
                key={`${item}_${index}`}>
                {item}
              </button>
            </li>
          ))}
      </ul>
      <Sort
        items={[
          { name: 'популярністю', type: 'popular' },
          { name: 'ціною', type: 'price' },
          { name: 'алфавітом', type: 'alphabetical' },
        ]}
      />
    </nav>
  );
}

export default Menu;

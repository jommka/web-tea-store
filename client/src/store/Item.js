import black from '../styles/img/black tea-1.jpg'
import green from '../styles/img/green tea-1.jpg'
import red from '../styles/img/red tea-1.jpg'
import chamomile from '../styles/img/chamomile tea-1.jpg'
import white_tea from '../styles/img/white tea-1.jpg'
import tea from '../components/UI/picture/tea.svg'
import toys from '../components/UI/picture/tea figurines or toys.svg'
import chinese from '../components/UI/picture/chinese tea ware.svg'
import tableware from '../components/UI/picture/tableware and accessories.svg'
import collectible from '../components/UI/picture/collectible tea.svg'
import cat from '../styles/img/ChineseTeaWare-1.jpg'
import croc from '../styles/img/ChineseTeaWare-2.jpg'
import all_time from '../components/UI/picture/all-item.svg'

export const Item = [
    {id: 1, name: 'Зеленый чай', price: 205, img: green, desc:'best', category: 'tea', subcategory: 'листовой'},
    {id: 2, name: 'Ромашковый чай', price: 300, img: chamomile, desc: 'best', category: 'tea', subcategory: 'листовой'},
    {id: 3,
        name: 'Английский завтрак',
        price: 105,
        img: black,
        desc: 'best',
        category: 'tea',
        subcategory: 'черный чай',
        desc_main:'Купаж из чёрного цейлонского и индийского чая с терпким вкусом и длительным цветочным послевкусием.',
        manufacturer: 'Россия',
        collection: '2024',
        conditions: 'хранить в сухом месте при относительной влажности не более 70% в плотно закрытой упаковке отдельно от остропахнущих предметов',
        shelf_life: '36 месяцев',
        temperature: '95°С',
        time: '2-3 мин'},
    {id: 4, name: 'Красный чай', price: 239, img: red, desc: 'best', category: 'tea', subcategory: 'листовой'},
    {id: 5, name: 'Белый пион', price: 400, img: white_tea, category: 'tea', subcategory: 'листовой'},
    {id: 6, name: 'Чайная фигурка "Кот удачи"', price: 400, img: cat, category: 'toys', subcategory: 'меняет цвет'},
    {id: 7, name: 'Чайная фигурка "Крокодил"', price: 360, img: croc, category: 'toys', subcategory: 'из исинской глины'}
]
export const Description = [{id: 3,
    desc:'Купаж из чёрного цейлонского и индийского чая с терпким вкусом и длительным цветочным послевкусием.',
    manufacturer: 'Россия',
    collection: '2024',
    conditions: 'хранить в сухом месте при относительной влажности не более 70% в плотно закрытой упаковке отдельно от остропахнущих предметов',
    shelf_life: '36 месяцев',
    temperature: '95°С',
    time: '2-3 мин',
}]
export const Types = [
    // {id: 'all', name: 'Все категории', img: all_time},
    {value: 'tea', label: 'Чай', img: tea},
    {value: 'collectible', label: 'Коллекционный чай', img: collectible},
    {value: 'tableware', label: 'Посуда и акссесуары', img: tableware},
    {value: 'chinese', label: 'Китайская чайная посуда', img: chinese},
    {value: 'toys', label: 'Чайные фигурки или игрушки', img: toys}
]
// export const Subcategory = [
//     // {id: 'all', name: 'Все категории', img: all_time},
//     {value: 'tea', label: 'Чай', img: tea},
//     {value: 'collectible', label: 'Коллекционный чай', img: collectible},
//     {value: 'tableware', label: 'Посуда и акссесуары', img: tableware},
//     {value: 'chinese', label: 'Китайская чайная посуда', img: chinese},
//     {value: 'toys', label: 'Чайные фигурки или игрушки', img: toys}
// ]

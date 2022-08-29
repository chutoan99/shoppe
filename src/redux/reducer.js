const dataCartLists = [
  {
    itemid: 17765176559,
    name: '01Giày air force 1 af1 chính hãng cho nam nữ, af1 all white bao check fullbox,The Bang Sneaker',
    image: 'd0891276e39ae7986b4318103519e8e9',
    currency: 'VND',
    stock: 326,
    status: 1,
    sold: 106,
    historical_sold: 123,
    liked: null,
    liked_count: 442,
    view_count: null,
    amount: 3,
    price: 185000000000,
    price_min: 185000000000,
    price_max: 210000000000,
    price_min_before_discount: 210000000000,
    price_max_before_discount: 299900000000,
    price_before_discount: 210000000000,
    has_lowest_price_guarantee: false,
    show_discount: 30,
    raw_discount: 30,
    discount: '30%',
    size_chart: '18ed720993f3db6b1b1c741f4e8560ac',
    tier_variations: [
      {
        name: 'Loại Giày',
        options: ['FULL BOX', 'NO BOX'],
        images: null,
        properties: [],
        type: 0,
      },
      {
        name: 'Size',
        options: [
          '36',
          '36.5',
          '37.5',
          '38',
          '38.5',
          '39',
          '40',
          '40.5',
          '41',
          '42',
          '42.5',
          '43',
          '44',
          '44.5',
          '45',
        ],
      },
    ],
    shop_name: 'Giaychinhhanggiare',
    newOption: '36',
  },
];
localStorage.setItem('dataCart', JSON.stringify(dataCartLists));
const getNewDataCart = JSON.parse(localStorage.getItem('dataCart'));
export const initState = {
  userLogin: false,
  users: {
    id: 1,
    name: 'Chu Toàn',
    email: 'Truongvanchutoan1999@gmail.com',
    address: 'Bình Thạnh Thành Phố Hồ Chí Minh',
    url: 'https://lh3.googleusercontent.com/iJI7pbUsDXxqemBnV9XETqbLBfg1TI0clR0x9tkH49lnTd-Xz94nCmFi2EYGVMRk4QwIpOAp386-7h99S-yIJCV15xV56cjKMT-VHu8Liip2s7M6N6yRrYzyJZBt7ZVzjwxiOArnG4INVW1dxKOD7poTU3BRA0YArpESg0S_i5vWMDV9NqJtLgMvj-XLS0zVhGB3nfoZOx9fyXIC3dD3ewFzdd8J2Y1_DALPBheSbeDQwdfyPPKrz-mPhVFecLsUi5iASDJPMaG0Gl4HFrUtE1do0ML3gwWMZMtsnF7cTW34XYFfIxUoyqUCACwKvhu9Vt3p1T4ld0P5NTslltaqbcdpEVydevOASAUznzjNo6KNUnhGGFXKhyto7J5K0Mxu4kDK3kFXs8rzT0uh_gDwfBsVQo8U1QpAxlmv6chU1yJE2H-FLppaGVTT0aB77DTmx_9zL9dfHiaLR-rN5ezkmWaI9rbNNJvjP130Q0BYoSPdqyRW36guMhJFHdrxVv6s5NXjzJFagwvaChns-XM0uZOlUaLsQPDVQWqXqCeZL15XyM33W-rhX9k2ytOLaoupW-IGbr-Gi8qqp7gGyz2uOQ1XOFe8CJ5h4B1UaG07ZOSgcJGUlhrhNoyMnY0gEQGnm8nJfkDjn--8lltunANj0EWEsVyONmLNZgUdrvfNl3WU5PZZTqUG9YFINtbnfRCvtaOgPKe8gXZ1pB502C853CoPRxkAtHpqyltIi-0iF8yeZP0S3I7x_fgnspIl=w285-h592-no?authuser=0',
  },
  toast: false,
  heart: false,
  loading: false,
  perPage: 48,
  currentPage: 1,
  start: 0,
  end: 48,
  dataCart: getNewDataCart,
  numberCart: getNewDataCart.length,
  BuyCart: [],
  statusOrder: [],
};
const rootReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'addCart':
      return {
        ...state,
        dataCart: [...state.dataCart, action.payload],
      };
    case 'deleteCart':
      const newCart = [...state.dataCart];
      newCart.splice(action.payload, 1);
      return {
        ...state,
        dataCart: newCart,
      };
    case 'UpdateOptions':
      const { option, index } = action.payload;
      let currentDataCart = [...state.dataCart];
      currentDataCart[index].newOption = option;
      return {
        ...state,
        dataCart: currentDataCart,
      };
    case 'updateAmount':
      const { indexAmount, newAmount } = action.payload;
      let currentDataAmont = [...state.dataCart];
      currentDataAmont[indexAmount].amount = newAmount;
      console.log(state.dataCart[indexAmount]);
      return {
        ...state,
        dataCart: currentDataAmont,
      };
    case 'addBuyCart':
      return {
        ...state,
        BuyCart: [...state.BuyCart, action.payload],
      };
    case 'deleteBuyCart':
      const newBuyCart = [...state.BuyCart];
      newBuyCart.splice(0, action.payload);
      return {
        ...state,
        BuyCart: newBuyCart,
      };
    case 'updateToast':
      return {
        ...state,
        toast: true,
      };
    case 'updateHeart':
      return {
        ...state,
        heart: true,
      };
    case 'updateHeartFalse':
      return {
        ...state,
        heart: false,
      };
    case 'updateHeartTrue':
      return {
        ...state,
        heart: true,
      };
    case 'LoadingTrue':
      return {
        ...state,
        loading: true,
      };
    case 'LoadingFalse':
      return {
        ...state,
        loading: false,
      };
    case 'userLogin':
      return {
        userLogin: true,
      };
    case 'logOut':
      return {
        userLogin: false,
      };
    case 'ChangePerPage':
      return {
        perPage: action.payload,
      };
    case 'ChangeCurrentPage':
      return {
        currentPage: action.payload,
      };
    case 'ChangeStart':
      return {
        start: action.payload,
      };
    case 'ChangeEnd':
      return {
        perPage: action.payload,
      };
    case 'addStatusOrder':
      return {
        ...state,
        statusOrder: [...state.statusOrder, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;

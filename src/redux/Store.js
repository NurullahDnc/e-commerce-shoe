import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './CategorySlice'
import ProductSlice from './ProductSlice'

export const store = configureStore({
  reducer: {
    // categorySlice'i al categories icerine at,  categories name ile ulasıyoruz

    categories : categorySlice,
    products: ProductSlice,

},

})


//! diger sayfadan buraya ulasmak icin dipast atmamız gerek  ,  depo gorevi goruyor burdan tum copms dagıtım oluyor
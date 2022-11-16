import { createSlice } from '@reduxjs/toolkit'

const buyItemSliceStarWars = createSlice({
    name: 'starWarsHistory',
    initialState: {
        num: 0,
        factList: [
            "прообразом Чубакки стал пёс режиссёра",
            "актёрам разрешили подобрать любимый цвет для своих световых мечей",
            "в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину",
            "дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу",
            "планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок",
        ],
        randomFacts: [],
        index: null,
       },
    reducers: {
        changeNumber: (state, action) => {
            state.num = action.payload
        },
    },
})

export const { changeNumber } = buyItemSliceStarWars.actions

export const SELECTOR_STAR_WARS_HISTORY = (state) => state.starWarsHistory

export const starWarsHistoryReducer = buyItemSliceStarWars.reducer

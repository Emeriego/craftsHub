import { createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice(
    {
        name: "products",
        initialState: {
            availProds: [],
            userCrafts: [],
            msg: ""
        },
        reducers: {
            fetchall(state, action){
                const prods = action.payload
                state.availProds = []
                prods.map(prod => {
                    state.availProds.push(prod)
                })
                
                // console.log(state.availProds)
            },
            fetchUserCrafts(state, action){
                const prods = action.payload
                state.userCrafts = []
                prods.map(prod => {
                    state.userCrafts.push(prod)

                })
                // console.log(state.availProds)
            }
        }
    })
    export default productSlice;

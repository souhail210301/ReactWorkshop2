import {create} from 'zustand'
import {persist} from 'zustand/middleware'
const useCounterStore= create(persist ((set) => ({
    count :0,
    addOne:()=> {
        set(
            (oldstate) =>(
        {count : oldstate.count+1

        }))},
   decerement : ()=> {
    set((oldstate)=> ({count:oldstate.count-1 }))
    },
    reset:()=> {set({count:0});}

}), {

    name: "zustand-counter",
}));

export default useCounterStore;
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      //o state refere-se ao initialstate e o action faz referência a ação cometida nessa função
      const nome = action.payload

      if (state.itens.find((produto) => produto.id === nome.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(nome)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions //esse export é para utilizar no Provider depois
export default carrinhoSlice.reducer //esse export é apenas para a store reconhecer o reducer

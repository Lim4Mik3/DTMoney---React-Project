import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { Container, ContainerTransactionType, RadioBox } from './styles'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('')
  const [amount, setAmoun] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleTransactionFormSubmit(event: FormEvent) {
    event.preventDefault();
    
    createTransaction({
      title,
      amount,
      category,
      type
    })
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleTransactionFormSubmit}>
        <h2>Nova transação</h2>

        <input 
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={(event) => setAmoun(Number(event.target.value))}
        />

        <ContainerTransactionType>
          <RadioBox 
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </ContainerTransactionType>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
import { useEffect } from "react";

import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api('transactions')
      .then(response => console.log(response))
  }, [])


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 800,00</td>
            <td>Casa</td>
            <td>19/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import {
  Container,
  Content,
  CardHeader,
  CardInput,
  Card,
  Button,
} from './styles';

export default function Students() {
  return (
    <Container>
      <Content>
        <CardHeader>
          <strong>Gerenciando alunos</strong>
          <div>
            <button>
              <MdAdd size={20} color="#fff" /> CADASTRAR
            </button>
            <CardInput>
              <MdSearch size={16} color="#999999" />
              <input type="text" placeholder="Buscar aluno" />
            </CardInput>
          </div>
        </CardHeader>
        <Card>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>Alecsander Souza Farias</span>
              </td>
              <td>
                <span>alecs@devfarias.com</span>
              </td>
              <td>
                <span>19</span>
              </td>
              <td></td>
              <td>
                <Button color="#4d85ee">editar</Button>
                <Button color="#de3b3b">apagar</Button>
              </td>
            </tr>
          </tbody>
        </Card>
      </Content>
    </Container>
  );
}

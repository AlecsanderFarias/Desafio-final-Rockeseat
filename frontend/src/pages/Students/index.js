import React, { useEffect, useState } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Content, CardHeader, CardInput, Card } from './styles';

import api from '../../services/api';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      const students = response.data;

      setStudents(students);
    }

    loadStudents();
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function isCompatible(student) {
    return !student.name.toLowerCase().indexOf(search);
  }

  async function handleExclue({ student, index }) {
    const confirmed = window.confirm(
      `Deseja excluir o aluno ${student.name} ?`
    );

    if (confirmed) {
      await api.delete(`/students/${student.id}`);

      const newStudents = students.filter(stu => {
        return !(stu.id === student.id);
      });

      setStudents(newStudents);
    }
  }

  return (
    <Container>
      <Content>
        <CardHeader>
          <strong>Gerenciando alunos</strong>
          <div>
            <Link to="/students/create">
              <MdAdd size={20} color="#fff" /> CADASTRAR
            </Link>
            <CardInput>
              <MdSearch size={16} color="#999999" />
              <input
                type="text"
                value={search}
                onChange={e => handleChange(e)}
                placeholder="Buscar aluno"
              />
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
            {students.filter(isCompatible).map((student, index) => (
              <tr key={student.id}>
                <td>
                  <span>{student.name}</span>
                </td>
                <td>
                  <span>{student.email}</span>
                </td>
                <td>
                  <span>{student.age}</span>
                </td>
                <td></td>
                <td>
                  <Link to={`/students/${student.id}`}>editar</Link>

                  <button onClick={() => handleExclue({ student, index })}>
                    Apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Card>
      </Content>
    </Container>
  );
}

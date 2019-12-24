import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Form, useField, Select } from '@rocketseat/unform';
import ReactDatePicker from 'react-datepicker';
import { addMonths, format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { formatPrice } from '../../util/format';

import history from '../../services/history';
import api from '../../services/api';

import 'react-datepicker/dist/react-datepicker.css';

import { Container, Content, CardHeader, Card, Field } from './styles';

const schema = Yup.object().shape({
  plan: Yup.string().required('O plano e obrigatorio'),
});

export default function UpdateStudent({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  const [end_date, setEnd_date] = useState('');
  const [planId, setPlanId] = useState();
  const [totalPrice, setTotalPrice] = useState('');
  const [error, setError] = useState('');
  const [student, setStudent] = useState();
  const [register, setRegister] = useState();

  //date field
  const Dateref = useRef(null);
  const { fieldName, registerField } = useField('start_date');
  const [start_date, setStart_date] = useState();
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: Dateref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [Dateref.current, fieldName]);

  async function handleSubmit({ plan }) {
    // validation form start_date
    if (!start_date) {
      setError('A data e obrigratoria');
    } else {
      setError('');

      try {
        setLoading(true);

        await api.put(`/registers/${register}`, {
          start_date,
          plan_id: Number(plan),
        });

        setLoading(false);
        history.push('/registers');
      } catch (error) {
        setLoading(false);
      }
    }
  }

  //change end_date a totalPrice
  useEffect(() => {
    if (planId) {
      const plan = plans.find(pl => {
        return pl.id === planId;
      });

      if (start_date) {
        setEnd_date(format(addMonths(start_date, plan.duration), 'dd/MM/yyyy'));
      }

      setTotalPrice(plan.duration * plan.price);
    }
  }, [planId, start_date]);

  useEffect(() => {
    async function getPlans() {
      setLoading(true);
      const response = await api.get('/plans');

      const plans = response.data;

      setPlans(plans);
      setLoading(false);
    }

    async function getRegister() {
      setLoading(true);
      const response = await api.get(`/registers/${id}`);

      const register = response.data;

      setStudent(register.student);
      setRegister(register.id);
      setStart_date(parseISO(register.start_date));

      setLoading(false);
    }

    getPlans();
    getRegister();
  }, []);

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <CardHeader>
            <strong>Cadastro de matrícula</strong>
            <div>
              <Link to="/registers">
                <MdChevronLeft color="#fff" size={20} /> VOLTAR
              </Link>
              <button disabled={loading}>
                <MdCheck color="#fff" size={20} /> SALVAR
              </button>
            </div>
          </CardHeader>

          <Card>
            <Field style={{ width: '100%', marginTop: 0 }}>
              <strong>ALUNO</strong>
              <input value={student ? student.name : null} disabled />
            </Field>

            <div>
              <Field>
                <strong>PLANO</strong>

                <Select
                  onChange={e => setPlanId(Number(e.target.value))}
                  name="plan"
                  options={plans}
                />
              </Field>
              <Field>
                <strong>DATA DE INÍCIO</strong>
                <div>
                  <ReactDatePicker
                    name={fieldName}
                    selected={start_date}
                    onChange={date => {
                      setStart_date(date);
                    }}
                    showPopperArrow
                    ref={Dateref}
                    style={{ width: '100%' }}
                    placeholderText="Escolha a data "
                    dateFormat="dd/MM/yyyy"
                    locale={pt}
                  />
                  {error && <span>{error}</span>}
                </div>
              </Field>
              <Field>
                <strong>DATA DE TÉRMINO</strong>
                <input
                  disabled
                  style={{ background: '#eee' }}
                  value={end_date}
                />
              </Field>
              <Field>
                <strong>VALOR FINAL</strong>
                <input
                  disabled
                  style={{ background: '#eee' }}
                  value={formatPrice(totalPrice)}
                />
              </Field>
            </div>
          </Card>
        </Form>
      </Content>
    </Container>
  );
}

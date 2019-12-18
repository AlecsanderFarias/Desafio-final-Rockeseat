import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { name, email, plan, totalPrice, end_date } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Matricula confirmada',
      template: 'registration',
      context: {
        student: name,
        plan,
        totalPrice,
        end_date: format(parseISO(end_date), "dd'/'MMMM'/'yyyy", {
          locale: pt,
        }),
      },
    });
  }
}

export default new RegistrationMail();

import Mail from '../../lib/Mail';

class ResponseOrderMail {
  get key() {
    return 'ResponseOrderMail';
  }

  async handle({ data }) {
    const { name, email, question, answer } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Pedido e auxílio respondido',
      template: 'order',
      context: {
        student: name,
        question,
        answer,
      },
    });
  }
}

export default new ResponseOrderMail();

import { Resend } from 'resend';
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: 'reebawse@gmail.com',
  to: 'reebawse@gmail.com',
  subject: 'Hello World',
  react: (
    <>
    <p>
      Email Body
    </p>
    </>
  )
});
import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}
//todo: Attachement

export class EmailService {

  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    }
  });

  constructor() { }

  async sendEmail(options: SendMailOptions): Promise<boolean> {

    const { to, subject, htmlBody, attachments = [] } = options;
    try {

      const sentInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments,
      });

      // console.log(sentInformation);
      return true;
    } catch (error) {
      // console.log(error)
      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = 'Logs del servidor';
    const htmlBody = `
      <h3>Logs de sistema - NOC</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore a magni corporis repudiandae. Eum rem consequuntur pariatur facere iusto.</p>
      <p>Ver logs adjuntos</p>
    `;
    const attachments: Attachment[] = [
      { filename: 'logs-low.log', path: './logs/logs-low.log' },
      { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
      { filename: 'logs-high.log', path: './logs/logs-high.log' }
    ];

    return this.sendEmail({
      to, subject, htmlBody, attachments
    });
  }
}
import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/uses-cases/checks/check-service";
import { SendEmailLogs } from "../domain/uses-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
)
const emailService = new EmailService();

export class Server {
  public static start() {
    console.log('Server started...');

    /* todo: Mandar emails
      Se comenta para no tener mucho spam de los correos */
    // new SendEmailLogs(
    //   emailService,
    //   fileSystemLogRepository,
    // ).execute(['saalvarado@tca.com'])

    // emailService.sendEmailWithFileSystemLogs(['saalvarado@tca.com']);
    // emailService.sendEmail({
    //   to: 'saalvarado@tca.com',
    //   subject: 'Logs de sistema',
    //   htmlBody: `
    //   <h3>Logs de sistema - NOC</h3>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore a magni corporis repudiandae. Eum rem consequuntur pariatur facere iusto.</p>
    //   <p>Ver logs adjuntos</p1>
    // `
    // });

    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       fileSystemLogRepository,
    //       () => console.log(`${url} is ok`),
    //       (error) => console.log(error),
    //     ).execute(url);
    //     // new CheckService().execute('http://localhost:3000/');
    //   }
    // );

    // CronService.createJob(
    //   '*/3 * * * * *',
    //   () => {
    //     const date = new Date();
    //     console.log('3 seconds', date);
    //   }
    // );

    // CronService.createJob(
    //   '*/2 * * * * *',
    //   () => {
    //     const date = new Date();
    //     console.log('2 seconds', date);
    //   }
    // );
  }
}


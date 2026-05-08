import { CheckService } from "../domain/uses-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
)

export class Server {
  public static start() {
    console.log('Server started...');

    CronService.createJob(
      '*/5 * * * * *',
      () => {
        const url = 'https://google.com';
        new CheckService(
          fileSystemLogRepository,
          () => console.log(`${url} is ok`),
          (error) => console.log(error),
        ).execute(url);
        // new CheckService().execute('http://localhost:3000/');
      }
    );

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


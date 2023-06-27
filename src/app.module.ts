import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user/user.entity';

@Module({
  imports: [UserModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Neogiciaa',
      password: '',
      database: 'testdatabase',
      entities: [User],
     // autoLoadEntities: true,
      synchronize: true
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
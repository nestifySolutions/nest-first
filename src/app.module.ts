import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UsmanModule } from './usman/usman.module';
import { GhaniModule } from './ghani/ghani.module';
import { Ghani2Module } from './ghani2/ghani2.module';
import { Ghani3Module } from './ghani3/ghani3.module';
import { Ghani4Module } from './ghani4/ghani4.module';

@Module({
  imports: [GameModule, CatsModule, UsersModule, UserModule, UsmanModule, GhaniModule, Ghani2Module, Ghani3Module, Ghani4Module],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}

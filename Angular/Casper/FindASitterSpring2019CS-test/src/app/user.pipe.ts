import { Pipe, PipeTransform } from '@angular/core';
import { User } from './entities/user';


@Pipe({
  name: 'userPipe'
})
export class UserPipe implements PipeTransform {

  transform(users: User[], search: any): any {
    console.log(users);
    console.log(search);

    if (search == undefined) {


      return users
    }
    
    if (search.includes("@") ) {

    return users.filter(user => user.email.indexOf(search) != -1)

    }

    return users.filter(user => user.username.toUpperCase().indexOf(search) != -1 || user.username.toLowerCase().indexOf(search) != -1)
  }

}

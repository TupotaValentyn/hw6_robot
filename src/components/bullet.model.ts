import { UnitModel } from '../shared/unit.model';

export class Bullet extends UnitModel {

  view = {
    width: '70px',
    height: '5px',
    transform: 'translate(0px)',
    'bacground-color' : 'green'
    // transform: 'rotateZ(10deg)'
  }
  changeView(shift:number) {
    this.view.transform = `translate(-100px, -${shift}px)`  
    console.log(shift)
  }
}
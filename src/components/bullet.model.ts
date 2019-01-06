import { UnitModel } from '../shared/unit.model';

export class Bullet extends UnitModel {

  view = {
    width: '70px',
    height: '5px',
    'bacground-color' : 'green'
    // transform: 'rotateZ(10deg)'
  }
  changeView() {
    this.view.width = '100px'
    this.view.height = '100px'
    this.view["bacground-color"] = 'red'
  }
}
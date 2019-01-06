import { UnitModel } from './../shared/unit.model';
import { ArmPartModel } from './arm-part.model';
import { WeaponModel } from './weapon.model';
import { Bullet } from './bullet.model';

export class ShoulderModel extends UnitModel {
	protected view = {
		width: 200,
		height: 200,
		top: -9,
		left: -24,
		'background-image': 'url(i/12.png)',
		transform: 'rotateZ(10deg)',
	};
	private interval: number;
	private topPart = new ArmPartModel();
	private bottomPart = new ArmPartModel();
	private bullet = new Bullet

	constructor() {
		super();

		this.addChild(this.topPart, {});
		this.addChild(this.bottomPart, {
			top: 107,
			left: -41,
			transform: 'rotateY(190deg)'
		});
	}

	shot() {
		clearInterval(this.interval);

		const rotateZTo = 90;
		const delay = 1000;
		let up = true;
		let rotateZ = 11;
		
		this.bullet.changeView()
		let counter = 0
		this.interval = setInterval(() => {
			
			if(rotateZ === 10) {
				this.view.transform = 'rotateZ('+ 10 +'deg)';				
				clearInterval(this.interval);
				return;
			}
			if(rotateZ >= rotateZTo) {
				up = false;
			}

			if(!up) {
				--rotateZ;
				this.view.transform = 'rotateZ(-'+ rotateZ +'deg)';
				return;
			} else {
				++rotateZ;
				this.view.transform = 'rotateZ(-'+ rotateZ +'deg)';
				return;
			}
		}, delay / rotateZTo);
		clearInterval()
		setInterval(() => {
			this.addWeapon({
				width: '100px', 
				height: '100px', 
				transform: `translate(${counter}px, 10px)`,
				'background-color': 'green'
			})
			counter++
			if (counter === 100) {
				clearInterval()
			}
		}, 20)
	}

	addWeapon(bulletstyle) {
		const weapon = new WeaponModel();
		weapon.addChild(this.bullet, bulletstyle)
		this.bottomPart.addChild(weapon, {
			width: 148,
			height: 72,
			top: 67,
			left: -95,
			transform: 'rotateZ(-88deg) rotateX(0deg) rotateY(176deg)'
		});
	}

}
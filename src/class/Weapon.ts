class Weapon {
  public weaponName: string;
  public weaponDamage: number = 10;

  constructor(weaponName: string, weaponDamage: number) {
    this.weaponName = weaponName;
    this.weaponDamage = weaponDamage;
  }
}

export default Weapon;

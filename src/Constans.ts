export const toFirstCharUppercase = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

 export const abMap = (array: any) => {
    let abilities = [];
    for (const el of array) {
      abilities.push(el.ability.name);
    }
    return abilities;
  };
  export const stMap = (array: any) => {
    let stats = [];
    for (const el of array) {
      stats.push(el.base_stat);
    }
    return stats;
  };
  export const tyMap = (array: any) => {
    let types = [];
    for (const el of array) {
      types.push(el.type.name);
    }
    return types;
  };
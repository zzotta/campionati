export const createUniqueIdentifier = ((components) => {
  let res = '';

  components.forEach((component) => {
    const cleanComponent = component.toString().trim().toLowerCase().replace(/\s+/g, '_');

    if(cleanComponent) {
      res += cleanComponent;
    }
  });

  return res ? res : null;
});
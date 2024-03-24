export default function transformData(data) {
  const specialisations = [];
  const specialisationNames = [];

  data.forEach((item) => {
    specialisations.push({
      id: item.id,
      name: item.name,
    });

    item.specializations.forEach((spec) => {
      specialisationNames.push({
        id: spec.id,
        name: spec.name,
        specialisationsId: item.id,
      });
    });
  });

  // Возвращаем результат в ожидаемом формате
  return { specialisations, specialisationNames };
}

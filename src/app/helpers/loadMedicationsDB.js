const loadMedicineDB = async () => {
  const data = await import('src/app/assets/medicine.json');
  return data.default;
};

export default loadMedicineDB;

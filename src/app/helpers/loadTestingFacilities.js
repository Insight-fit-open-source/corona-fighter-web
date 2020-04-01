const loadTestingFacilities = async () => {
  const testingFacilityData = await import(
    'src/app/assets/testingLocations.json'
  );
  return testingFacilityData.default;
};

export default loadTestingFacilities;

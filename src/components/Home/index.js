import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import ModuleA from 'modulea-bn';

function Home() {
  const updateModuleState = useStoreActions(
    (actions) => actions.moduleStore.add
  );
  const moduleInfo = useStoreState((state) => state.moduleStore.moduleInfo);

  const handleStateUpdate = (data) => {
    updateModuleState(data);
  };

  useEffect(() => {
    console.log('moduleInfo: ', moduleInfo);
  }, [moduleInfo]);

  return (
    <ModuleA
      message="This is ModuleA Component"
      handleStateUpdate={handleStateUpdate}
    />
  );
}

export default Home;

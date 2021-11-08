import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import ModuleA from 'modulea-bn';
import ModuleB from 'moduleb-bn';

function Home() {
  const updateModuleState = useStoreActions(
    (actions) => actions.moduleStore.add
  );
  const moduleInfo = useStoreState((state) => state.moduleStore.moduleInfo);

  const handleStateUpdate = (data) => {
    updateModuleState(data);
  };

  const changeModuleAState = (data) => {
    updateModuleState(data);
  };

  return (
    <>
      <ModuleA
        message="This is ModuleA Component"
        handleStateUpdate={handleStateUpdate}
      />

      <ModuleB
        message="This is ModuleB Component"
        backgroundColor={moduleInfo.modulebBackgroundColor}
        changeModuleAState={changeModuleAState}
      />
    </>
  );
}

export default Home;

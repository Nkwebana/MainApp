import React, { useEffect } from 'react';
import { View } from 'react-native';
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

  useEffect(() => {
    console.log('moduleInfo: ', moduleInfo);
  }, [moduleInfo]);

  return (
    <View>
      <ModuleA
        message="This is ModuleA Component"
        handleStateUpdate={handleStateUpdate}
      />

      <ModuleB
        message="This is ModuleB Component"
        backgroundColor={moduleInfo.modulebBackgroundColor}
        changeModuleAState={changeModuleAState}
      />
    </View>
  );
}

export default Home;

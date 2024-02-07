import React, { useEffect } from 'react';

const UnityWebGL = () => {
  useEffect(() => {
    // Ensure the path is correct based on where you've placed the build files
    const loaderUrl = 'unityBuild/Build/UnityLoader.js';
    const config = {
      dataUrl: 'public/Build/',
      frameworkUrl: 'Test_Template_Project\\Builds\\WebGL_build_V8\\Build', // Corrected slashes
      codeUrl: 'unityBuild/Build/build.wasm',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'YourCompanyName',
      productName: 'YourProductName',
      productVersion: '1.0',
    };

    loadUnity(config, loaderUrl);
  }, []);

  const loadUnity = (config, loaderUrl) => {
    const script = document.createElement('script');
    script.src = loaderUrl;
    script.onload = () => {
      window.UnityLoader.instantiate('unityContainer', config); // Change here
    };
    document.body.appendChild(script);
  };

  return <div id="unityContainer" style={{ width: '800px', height: '600px' }}></div>;
};

export default UnityWebGL;
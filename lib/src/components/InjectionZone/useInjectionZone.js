import useSiapi from '../../hooks/useSiapi';

const useInjectionZone = area => {
  const { siapi: globalSiapi } = useSiapi();

  const [pluginName, page, position] = area.split('.');
  const plugin = globalSiapi.getPlugin(pluginName);

  if (!plugin) {
    return null;
  }

  return plugin.getInjectedComponents(page, position);
};

export default useInjectionZone;

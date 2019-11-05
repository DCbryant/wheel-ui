function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

interface ClassToggles {
  [K: string]: boolean
}

interface Options {
  extra: string | undefined
}

const scopedClassMaker = (prefix: string) => {
  return (name: string | ClassToggles, options?: Options) => {
    return Object.entries(name instanceof Object ? name : {[name]: name})
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ')
  }
}

export {scopedClassMaker}
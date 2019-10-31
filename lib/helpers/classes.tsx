function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

const scopedClassMaker = (prefix: string) => {
  return (name ?: string) => {
    return [prefix, name].filter(Boolean).join('-')
  }
}

export {scopedClassMaker}
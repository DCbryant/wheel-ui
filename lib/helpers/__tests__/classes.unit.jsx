import classes from '../classes'

describe('class', () => {
  it('接受一个classname', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })

  it('接受2个classname', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })

  it('xxx', () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })

  it('yyy', () => {
    const result = classes('a', undefined, '中文', false, null)
    expect(result).toEqual('a 中文')
  })

  it('zzz', () => {
    const result = classes()
    expect(result).toEqual('')
  })
})
import React,{useRef, useEffect} from 'react';
import './table.scss';
import { scopedClassMaker } from '../helpers/classes';
import Icon from '../Icon/Icon';

const sc = scopedClassMaker('wheel-table')

interface StringObject {
 [ index: number] : {}
}

interface Props {
  dataSource: StringObject [],
  columns: StringObject [],
  border?: boolean,
  stripe?: boolean,
  selectedItems?: StringObject [],
  useSelectedItems?: any
  orderBy?: {},
  useOrderBy?: any,
  height?: number,
}

const Table: React.FunctionComponent<Props> = (props: any) => {
  const {dataSource, columns, className, border, stripe, selectedItems, orderBy, useOrderBy, height} = props;
  let copySelectedItems = JSON.parse(JSON.stringify(selectedItems))
  const checkEl = useRef(null)
  const handleItem = (e:React.ChangeEvent<HTMLInputElement>, data) => {
    if (e.target.checked) {
      copySelectedItems.push(data)
    } else {
      copySelectedItems = copySelectedItems.filter(item => item.key !== data.key)
    }
    props.useSelectedItems(copySelectedItems)
  }
  const checkAll = (): boolean => {
    return selectedItems.length === dataSource.length;
  }

  const isChecked = (data):boolean => {
    return selectedItems.some(item => item.key === data.key)
  }

  const handleAllItem = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
    props.useSelectedItems(e.target.checked ? dataSource : [])
  }

  let copyOrderBy = JSON.parse(JSON.stringify(orderBy))
  const sort = (column) => {
    if (copyOrderBy[column.key] === 'asc') {
      copyOrderBy[column.key] = 'desc'
    } else if (copyOrderBy[column.key] === 'desc') {
      copyOrderBy[column.key] = true
    } else {
      copyOrderBy[column.key] = 'asc'
    }
    useOrderBy(copyOrderBy)
  }

  useEffect(() => {
    if (dataSource.length !== selectedItems.length) {
      if (selectedItems.length !== 0) {
        if (checkEl.current !== null) {
          checkEl.current.indeterminate = true;
        }
      }
    } else {
      if (checkEl.current !== null) {
        checkEl.current.indeterminate = false;
      }
    }
  })
  // console.log(orderBy, 'orderBy')
  return (
    <div className={sc('wrapper')}>
      <div style={height && {height: height + 'px'}} className={height && sc('scroll-box')}>
        <table className={`wheel-table ${border && 'wheel-table-border'} ${stripe && 'wheel-table-stripe'} ${className ? className : ''}`}>
          <thead>
            <tr>
              <th style={{width: 50}}>
                <input type='checkbox' checked={checkAll()} ref={checkEl} onChange={handleAllItem} />
              </th>
              {columns.map(column => (
                <th key={column.key}>
                  <div className='wheel-table-th-head'>
                    {column.title}
                    {orderBy && orderBy[column.key] && (
                      <span className='wheel-table-th-head-sorter' onClick={sort.bind(null, column)}>
                        <Icon name='arrowUp' className={orderBy[column.key] === 'asc' ? 'active' : ''} />
                        <Icon name='arrowDown' className={orderBy[column.key] === 'desc' ? 'active' : ''} />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map(data => {
            return (
              <tr style={{width: 50}} key={data.key}>
                <td><input type='checkbox' onChange={(e) => handleItem(e, data)} checked={isChecked(data)} /></td>
                {columns.map(column => (
                  <td key={column.key}>{data[column.key]}</td>
                ))}
              </tr>
            )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table;
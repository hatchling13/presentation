(module
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "RetVal" (func $RetVal))
 (func $RetVal (; 0 ;) (result i32)
  (local $0 i32)
  (set_local $0
   (i32.const 13)
  )
  (return
   (get_local $0)
  )
 )
)



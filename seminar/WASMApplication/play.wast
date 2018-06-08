(module
	(func $play (import "imports" "playVideo"))
	(func (export "exported_func")
		call $play
	)
)
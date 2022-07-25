onEvent('block.registry', event => {

    function ripper(id, name){
        event.create(id).material('metal').hardness(1).displayName(name).tagBlock('minecraft:mineable/pickaxe')
    }

    ripper('void_ripper_actuator','Void Ripper Actuator')
    ripper('void_ripper_frame','Void Ripper Frame')
    ripper('void_ripper_core_material','Void Ripper Core Material')
    ripper('void_ripper_core','Void Ripper Core')
  })
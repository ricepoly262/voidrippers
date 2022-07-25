function checkForValidMultiblock(b){ // disgusting
    
    let a1 = b.north=='kubejs:void_ripper_actuator'
    let a2 = b.north.north=='kubejs:void_ripper_actuator'
    let a3 = b.north.north.down=='kubejs:void_ripper_actuator'
    let a4 = b.south=='kubejs:void_ripper_actuator'
    let a5 = b.south.south=='kubejs:void_ripper_actuator'
    let a6 = b.south.south.down=='kubejs:void_ripper_actuator'
    let a7 = b.east=='kubejs:void_ripper_actuator'
    let a8 = b.east.east=='kubejs:void_ripper_actuator'
    let a9 = b.east.east.down=='kubejs:void_ripper_actuator'
    let a10 = b.west=='kubejs:void_ripper_actuator'
    let a11 = b.west.west=='kubejs:void_ripper_actuator'
    let a12 = b.west.west.down=='kubejs:void_ripper_actuator'

    let actuator = (a1 && a2 && a3 && a4 && a5 && a6 && a7 && a8 && a9 && a10 && a11 && a12)

    if(actuator){
        let c1 = b.down=='kubejs:void_ripper_core_material'
        let c2 = b.down.north=='kubejs:void_ripper_core_material'
        let c3 = b.down.south=='kubejs:void_ripper_core_material'
        let c4 = b.down.east=='kubejs:void_ripper_core_material'
        let c5 = b.down.west=='kubejs:void_ripper_core_material'
        let c6 = b.down.north.west=='kubejs:void_ripper_core_material'
        let c7 = b.down.north.east=='kubejs:void_ripper_core_material'
        let c8 = b.down.south.west=='kubejs:void_ripper_core_material'
        let c9 = b.down.south.east=='kubejs:void_ripper_core_material'

        let c = (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9)

        if(c){
            let f1 = b.down.north.north.north=='kubejs:void_ripper_frame'
            let f2 = b.down.north.north.north.east=='kubejs:void_ripper_frame'
            let f3 = b.down.north.north.north.west=='kubejs:void_ripper_frame'

            let f2a = b.down.north.north.north.east.south.east=='kubejs:void_ripper_frame'
            let f3a = b.down.north.north.north.west.south.west=='kubejs:void_ripper_frame'

            let f4 = b.down.south.south.south=='kubejs:void_ripper_frame'
            let f5 = b.down.south.south.south.east=='kubejs:void_ripper_frame'
            let f6 = b.down.south.south.south.west=='kubejs:void_ripper_frame'

            let f5a = b.down.south.south.south.east.north.east=='kubejs:void_ripper_frame'
            let f6a = b.down.south.south.south.west.north.west=='kubejs:void_ripper_frame'
              
            let f7 = b.down.east.east.east=='kubejs:void_ripper_frame'
            let f8 = b.down.east.east.east.north=='kubejs:void_ripper_frame'
            let f9 = b.down.east.east.east.south=='kubejs:void_ripper_frame'        

            let f10 = b.down.west.west.west=='kubejs:void_ripper_frame'
            let f11 = b.down.west.west.west.north=='kubejs:void_ripper_frame'
            let f12 = b.down.west.west.west.south =='kubejs:void_ripper_frame'   


            let f = (f1 && f2 && f3 && f4 && f5 && f6 && f7 && f8 && f9 && f10 && f11 && f12 && f5a && f6a && f2a && f3a)

            if(f){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }else{
        return false
    }
}

onEvent('block.place', e => {
    if(e.getEntity().isPlayer()){
        let block = e.block
        let ply = e.getEntity()

        if(block.id == 'kubejs:void_ripper_core'){
            let valid = checkForValidMultiblock(block)

            if(valid){ply.tell("Valid Structure!")}
            else{
                e.cancel() 
                ply.tell("Invalid Structure!")
            }
        }
    }else{
        e.cancel()
    }

})
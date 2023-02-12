/**
 * Unstorted name:pgk_metadata_verions_relase_type */
type pgk_mtd_v_r_t = "relese"|"debug"|"dev"
/**
 * NAME:pgk
 */
type pgk_mt
d ={
    name:string
    verions:   `${pgk_mtd_v_r_t}.${number}.${number}`
}
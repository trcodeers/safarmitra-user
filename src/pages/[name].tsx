import { NextPage } from "next/types";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getPlaceDetails } from "../api/place";
import useFetch from "../hooks/useFetch"
import { Box } from "@mui/material";

const content = "<div><br /></div>Object destructuring is the way of getting the value of object's properties without using the dot notation.<div><br /><div>For example&nbsp;</div><div style=\"background-color: #1e1e1e; color: #d4d4d4; font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; font-size: 12px; line-height: 18px; white-space: pre;\"><div>           </div><div><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; </span><span>&nbsp;</span>let obj = {</div><div><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span>      <span style=\"color: #9cdcfe;\">x:</span> <span style=\"color: #b5cea8;\">2</span>,</div><div>                 <span style=\"color: #9cdcfe;\">y:</span> <span style=\"color: #b5cea8;\">5</span></div><div>            }</div><br /></div><div><br /></div><div>Above is the example of object destructuring.</div><div>Getting the value of y properties from <b>Object</b> obj using object destructing</div><div><br /><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcEAew__5B4CFaJbmZnxsUUI7QL0EAyhRmgadFvZbdnnaQmM8W9VtA7m_K5e0TxXwmmzSEFt5CtBPfrWXC_j_t2ZSIZZRBPzFeT9E-KfUixhIVBNCkdhyYeVnmWhG9ds0ans3w9pPnLHZK4rbqoiMnoaRYoI1hHRT6py45eFga5N__PYQTVz67SH8uMQ/s6912/Class%20Of%20Code.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"3456\" data-original-width=\"6912\" height=\"144\" src=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcEAew__5B4CFaJbmZnxsUUI7QL0EAyhRmgadFvZbdnnaQmM8W9VtA7m_K5e0TxXwmmzSEFt5CtBPfrWXC_j_t2ZSIZZRBPzFeT9E-KfUixhIVBNCkdhyYeVnmWhG9ds0ans3w9pPnLHZK4rbqoiMnoaRYoI1hHRT6py45eFga5N__PYQTVz67SH8uMQ/w210-h144/Class%20Of%20Code.png\" width=\"210\" /></a></div><br /></div><div><span><br /></span></div><div><span>&nbsp; &nbsp; let {y} = obj</span><br /></div><div><span>&nbsp; &nbsp; console.log(y) // Output : 5</span><br /></div><div><span>&nbsp; &nbsp;&nbsp;</span></div><div><span>Another way of getting the properties:</span></div><div><span><b>&nbsp;obj.y</b></span></div><h4 style=\"text-align: left;\"><span style=\"font-weight: normal;\">The destructed values can be assigned to new values too. In the following example we are getting the value of x of obj Object, and reassigning it to the another variable k.</span></h4><div><div style=\"background-color: #1e1e1e; color: #d4d4d4; font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; font-size: 12px; line-height: 18px; white-space: pre;\"><div><br /></div><div>   <span style=\"color: #569cd6;\">let</span> {<span style=\"color: #9cdcfe;\">x</span>:<span style=\"color: #4fc1ff;\">k</span>} = <span style=\"color: #4fc1ff;\">obj</span></div><div>   <span style=\"color: #9cdcfe;\">console</span>.<span style=\"color: #dcdcaa;\">log</span>(<span style=\"color: #9cdcfe;\">k</span>)</div><div><br /></div></div></div><div><i><br /></i></div><div><i>** Since it is reassigned to another variable so the variable x will not exist. That's why printing x will be undefined.</i></div><div><br /></div><div><i>** If you try to extract a value from object that does not exist it would be undefined.</i></div><div><i><br /></i></div><div><i><br /></i></div><div>For the above example :</div><div><br /></div><div>let {z} = obj&nbsp;</div><div>console.log(x) // Since z does not exist, it would be undefined.</div><div><br /></div><div>But if you assigned that to a default value it would be assigned to the default value, in case if that properties does not exist.</div><div><br /></div><div>Example :</div><div><br /></div><div>let {z=90} = obj</div><div>console.log(z) // Output : 90, since z does not exist on obj object so it will be assigned to default 90.</div><div><br /></div><h4 style=\"text-align: left;\">Array destructing</h4><div><div style=\"background-color: #1e1e1e; color: #d4d4d4; font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; font-size: 12px; line-height: 18px; white-space: pre;\"><div> </div><div><span style=\"color: #569cd6;\"> const</span> <span style=\"color: #4fc1ff;\">data</span> = [<span style=\"color: #b5cea8;\">1</span>, <span style=\"color: #b5cea8;\">22</span>, <span style=\"color: #b5cea8;\">33</span>, <span style=\"color: #b5cea8;\">4</span>]</div><div>           </div><div> <span style=\"color: #569cd6;\">let</span> [<span style=\"color: #9cdcfe;\">x</span>, <span style=\"color: #9cdcfe;\">y</span>] = <span style=\"color: #4fc1ff;\">data</span>    </div><div> <span style=\"color: #9cdcfe;\">console</span>.<span style=\"color: #dcdcaa;\">log</span>(<span style=\"color: #9cdcfe;\">x</span>, <span style=\"color: #9cdcfe;\">y</span>)     </div><div> </div></div></div><div><br /></div><div>Output will be the number at index 0 and 1</div><div><span><b>Output : 1 22&nbsp;</b></span></div><div><span><b><br /></b></span></div><div><div style=\"background-color: #1e1e1e; color: #d4d4d4; font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; font-size: 12px; line-height: 18px; white-space: pre;\"><div>   </div><div>     <span style=\"color: #569cd6;\">const</span> <span style=\"color: #4fc1ff;\">data</span> = [<span style=\"color: #b5cea8;\">1</span>, <span style=\"color: #b5cea8;\">22</span>, <span style=\"color: #b5cea8;\">33</span>, <span style=\"color: #b5cea8;\">4</span>]       </div><div>     <span style=\"color: #569cd6;\">let</span> [<span style=\"color: #9cdcfe;\">x</span>, <span style=\"color: #9cdcfe;\">y</span>, ...<span style=\"color: #9cdcfe;\">last</span>] = <span style=\"color: #4fc1ff;\">data</span></div><div>     <span style=\"color: #9cdcfe;\">console</span>.<span style=\"color: #dcdcaa;\">log</span>(<span style=\"color: #9cdcfe;\">last</span>)  </div><div><br /></div></div></div><div><span><b><br /></b></span></div><div>In the above example x and y stores the first two values then the last variable stores the rest of the elements in an array,</div><div>Note there are <b>three dots</b> before last which called <b>rest operator</b>. This is used to clone all the elements in the array properties in object.</div><div><span><span><br /></span></span></div><div><span><span><br /></span></span></div><div><span><span>While you can exclude some of the variables in the array using Array&nbsp;</span></span>destructuring<span><span>.</span></span></div><div><span><span><br /></span></span></div><div><span><span>Example to the set the second value from the data array</span></span></div><div><span><span><br /></span></span></div><div><div style=\"background-color: #1e1e1e; color: #d4d4d4; font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; font-size: 12px; line-height: 18px; white-space: pre;\"><div>   <span style=\"color: #569cd6;\">const</span> <span style=\"color: #4fc1ff;\">data</span> = [<span style=\"color: #b5cea8;\">1</span>, <span style=\"color: #b5cea8;\">22</span>, <span style=\"color: #b5cea8;\">33</span>, <span style=\"color: #b5cea8;\">4</span>]   </div><div>   <span style=\"color: #569cd6;\">const</span> [,<span style=\"color: #4fc1ff;\">x</span>] = <span style=\"color: #4fc1ff;\">data</span></div><div>   <span style=\"color: #9cdcfe;\">console</span>.<span style=\"color: #dcdcaa;\">log</span>(<span style=\"color: #9cdcfe;\">x</span>)  // Output : 22</div></div></div><div><span><br /></span></div><div><span><br /></span></div><div><span>Similar to get the third element:</span></div><div><span><span>&nbsp; &nbsp; const [, , z] = data</span></span></div><div><br /></div><div><br /></div><div><br /></div></div>"

const Index: NextPage = () => {

    const router = useRouter()
    const { name } = router.query

    const { data: getPlaceDetailsData, error: getPlaceDetailsError, loading: getPlaceDetailsLoading, request: getPlaceDetailsRequset } = useFetch(getPlaceDetails)

    const [snackMessage, setSnackMessage] = useState('')
    const [data, setData] = useState('')

    useEffect(() =>{
        if(name){
            getPlaceDetailsRequset({name})
         }
      }, [name]) 

      useEffect(() =>{
        if(getPlaceDetailsError?.status){
            setSnackMessage(getPlaceDetailsError?.message || 'Please try after somtime')
        }
        else{
            if(getPlaceDetailsData?.result){
                setData(getPlaceDetailsData?.result)
            }
        }
      }, [getPlaceDetailsData, getPlaceDetailsError])


    return(
        <>
        <Box
            sx={{
                // width: { lg: '80%', xs: '90%', },
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
        >
            <div  dangerouslySetInnerHTML={{ __html: content }}/>
        </Box>
        </>
    )

}

export default Index;
